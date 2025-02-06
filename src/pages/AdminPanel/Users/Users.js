import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Users() {
  const [allUsersList, setAllUsersList] = useState([])
  // Getting All Of Users
  useEffect(() => {
    fetch('https://moboland-react-8cec2-default-rtdb.firebaseio.com/users.json')
      .then(res => res.json())
      .then(usersData => {
        const userArray = Object.entries(usersData).map(([id, userInfo]) => ({
          id,
          ...userInfo
        }));
        setAllUsersList(userArray)
      })
  }, [allUsersList])

  // Changing User Role
  const updateUserRole = (user) => {
    const userId = user.id
    const updatedUserData = {
      name: user.name,
      username: user.username,
      password: user.password,
      phone: user.phone,
      role: user.role === 'کاربر' ? 'ادمین' : 'کاربر'
    }
    Swal.fire({
      title: "آیا از تغییر سطح این کاربر مطمئن‌اید؟",
      text: "در صورت تغییر بعدا نیز می توانید سطح کاربر را ویرایش کنید!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9545ED",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله، مطمئنم!",
      cancelButtonText: 'لغو کردن!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://moboland-react-8cec2-default-rtdb.firebaseio.com/users/${userId}.json`, {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(updatedUserData)
        }).then(res => Swal.fire({
          title: "سطح کاربر تغییر یافت!",
          icon: "success",
          confirmButtonColor: "#9545ED",
          confirmButtonText: 'باشه'
        })
        ).catch(()=>{
          Swal.fire({
            title: "عملیات با شکست مواجه شد!",
            icon: "error",
            confirmButtonColor: "#9545ED",
            confirmButtonText: 'باشه'
          }).then(() => { window.location.reload() })
        })
      }
    });
  }

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
                      <td>{user.role}</td>
                      <td>
                        {
                          user.role === 'کاربر' ?
                            <button className='px-3 py-1.5 text-sm text-white bg-green-700 rounded-md' onClick={() => updateUserRole(user)}>تغییر به ادمین</button>
                            : <button className='px-3 py-1.5 text-sm text-white bg-sky-800 rounded-md' onClick={() => updateUserRole(user)}>تغییر به کاربر عادی</button>
                        }
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
