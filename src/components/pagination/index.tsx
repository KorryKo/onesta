interface Props {
  page: number;
  setPage: (page: number) => void;
  count: number;
}

const Pagination: React.FC<Props> = ({ page, setPage, count }) => {
  const totalElements: number = count;
  const elementsPerPage: number = 10;
  const totalPages: number = Math.ceil(totalElements / elementsPerPage);
  const pageNumbers: any[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  function handleClick(page: any) {
    if (page === "prev" && page > 1) {
      setPage(page - 1);
    } else if (page === "next" && page < totalPages) {
      setPage(page + 1);
    } else if (typeof page === "number") {
      setPage(page);
    }
  }

  function renderPageNumbers() {
    const visiblePageElements = [];

    if (totalPages === 1) {
      visiblePageElements.push(1);
    } else if (totalPages <= 5) {
      visiblePageElements.push(...pageNumbers);
    } else if (page <= 3) {
      visiblePageElements.push(1, 2, 3, 4, 5, "...", totalPages);
    } else if (page >= totalPages - 2) {
      visiblePageElements.push(
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      visiblePageElements.push(
        1,
        "...",
        page - 2,
        page - 1,
        page,
        page + 1,
        page + 2,
        "...",
        totalPages
      );
    }

    if (page !== 1) {
      visiblePageElements.unshift(
        <button
          key="prev"
          className="my-5 mr-4 p-1.5"
          onClick={() => handleClick(page - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      );
    }

    if (page !== totalPages) {
      visiblePageElements.push(
        <button
          key="next"
          className="my-5 ml-4 p-1.5"
          onClick={() => handleClick(page + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      );
    }

    return visiblePageElements.map((pageElement, index) => {
      if (pageElement === "...") {
        return (
          <div key={index} className="my-5 mr-1 py-1 px-2 rounded-md">
            {pageElement}
          </div>
        );
      } else {
        return typeof pageElement === "object" ? (
          pageElement
        ) : (
          <button
            key={index}
            className={`my-5 mr-1 py-1 px-2 rounded-md ${
              pageElement === page ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleClick(pageElement)}
          >
            {pageElement}
          </button>
        );
      }
    });
  }
  return (
    <div className="self-end flex">
      <div className="flex items-center">{renderPageNumbers()}</div>
    </div>
  );
};
export default Pagination;
