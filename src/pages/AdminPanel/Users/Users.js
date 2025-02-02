import React, { useEffect, useState } from 'react'

export default function Users() {
  const [allUsersList, setAllUsersList] = useState([])
  useEffect(() => {
    fetch('https://moboland-react-8cec2-default-rtdb.firebaseio.com/users.json')
      .then(res => res.json())
      .then(usersData => {
        const userArray = Object.values(usersData)
        setAllUsersList(userArray)
      })
  }, [])

  return (
    <div>
      <h1 className='p-admin__title'>لیست کـاربران</h1>
      <div className='p-admin__box py-7'>
        {
          allUsersList.length > 0 ?

            <table className='w-full'>
              <thead className='bg-custom-navy/15'>
                <tr>
                  <th>شناسه</th>
                  <th>نام و نام‌خانوادگی</th>
                  <th>نام کاربری</th>
                  <th>شماره</th>
                  <th>نقش</th>
                  <th>تغییر سطح</th>
                  <th>حذف</th>
                  <th>بن</th>
                </tr>
              </thead>

              <tbody>
                {
                  allUsersList.map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.phone}</td>
                      <td>کاربر</td>
                      <td>
                        <button className='px-3 py-1.5 text-sm text-white bg-green-700 rounded-md'>تغییر به کاربر عادی</button>
                      </td>
                      <td>
                        <button className='px-3 py-1.5 text-sm text-white bg-red-500 rounded-md'>حذف</button>
                      </td>
                      <td>
                        <button className='px-3.5 py-1.5 text-sm text-white bg-red-700 rounded-md'>بن</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            :
            <p>هیچ کاربری یافت نشد</p>
        }
      </div>
    </div>
  )
}
