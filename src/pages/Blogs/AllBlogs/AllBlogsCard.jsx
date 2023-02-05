const AllBlogsCard = (props) =>{
return <>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title font-semibold">Blog Title</h2>
    <p className="text-sm text-gray-500">Blog Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quod reprehenderit sapiente aut pariatur, animi velit? Laborum necessitatibus fugiat reprehenderit.</p>
    <div className="card-actions mt-6 justify-end">
      <span className="bg-orange-50 px-4 py-1 font-semibold rounded-md hover:underline cursor-pointer">tag</span><span className="bg-orange-50 px-4 py-1 font-semibold rounded-md hover:underline cursor-pointer">tag</span><span className="bg-orange-50 px-4 py-1 font-semibold rounded-md hover:underline cursor-pointer">tag</span>
    </div>
  </div>
</div>
</>
}
export default AllBlogsCard;