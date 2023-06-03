const Pagination = () => {
  return (
    <div className="join space-x-2 mt-8">
      <button className="join-item btn btn-outline">Previous</button>
      <button className="join-item btn bg-white">1</button>
      <button className="join-item btn bg-white">2</button>
      <button className="join-item btn bg-white btn-disabled">...</button>
      <button className="join-item btn bg-white">99</button>
      <button className="join-item btn bg-white">100</button>
      <button className="join-item btn btn-outline">Next</button>
    </div>
  );
};

export default Pagination;
