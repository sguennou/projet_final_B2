const Th = (props) => (
  <th
    className="p-2 bg-black-600 border-r-2 border-[#6DC6E3] text-[#6DC6E3] font-bold"
    {...props}
  />
)

const Table = () => {
  return (
    <table className="w-4/12 mx-auto mt-4 font-bold">
      <thead>
        <tr>
          <Th>command</Th>
          <Th>Option</Th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  )
}

export default Table
