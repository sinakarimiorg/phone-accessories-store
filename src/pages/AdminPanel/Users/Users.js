import React, { useEffect, useState } from 'react'
import { MdOutlineVisibility } from 'react-icons/md'
import Swal from 'sweetalert2'

export default function Users() {
  const [allUsersList, setAllUsersList] = useState([])
  // Getting All Of Users
  useEffect(() => {
    getAllUsers()
  }, [])
  const getAllUsers = () => {
    fetch('https://moboland-react-8cec2-default-rtdb.firebaseio.com/users.json')
      .then(res => res.json())
      .then(usersData => {
        const userArray = Object.entries(usersData).map(([id, userInfo]) => ({
          id,
          ...userInfo
        }));
        setAllUsersList(userArray)
      })
  }

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
        ).catch(() => {
          Swal.fire({
            title: "عملیات با شکست مواجه شد!",
            icon: "error",
            confirmButtonColor: "#9545ED",
            confirmButtonText: 'باشه'
          })
        })
      }
    });
  }

  const removeUser = (user) => {
    const userId = user.id
    Swal.fire({
      title: "آیا از حذف این کاربر مطمئن‌اید؟",
      text: "در صورت حذف کاربر بعدا امکان بازگردانی وجود ندارد!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9545ED",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله، مطمئنم!",
      cancelButtonText: 'لغو کردن!'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://moboland-react-8cec2-default-rtdb.firebaseio.com/users/${userId}.json`, {
          method: 'DELETE',
        }).then(res => {
          console.log(res);
          getAllUsers()
          Swal.fire({
            title: "کاربر با موفقیت حذف شد!",
            icon: "success",
            confirmButtonColor: "#9545ED",
            confirmButtonText: 'باشه'
          })
        }).catch(() => {
          Swal.fire({
            title: "عملیات با شکست مواجه شد!",
            icon: "error",
            confirmButtonColor: "#9545ED",
            confirmButtonText: 'باشه'
          })
        })
      }
    })
  }

  // Show User Infos 
  const showUserInfo = (user) => {
    Swal.fire({
      title: `اطلاعات ${user.name}`,
      html: `
        <p><strong>نام کاربری:</strong> ${user.username}</p>
        <p><strong>شماره:</strong> ${user.phone}</p>
        <p><strong>نقش:</strong> ${user.role}</p>
      `,
      icon: 'info',
      confirmButtonText: 'باشه',
    });
  };

  return (
    <div className='min-h-[100vh]'>
      <h1 className='p-admin__title'>لیست کـاربران</h1>
      <div className='p-admin__box tracking-tighter custom-sc:tracking-normal py-4 custom-sc:py-7'>
        {
          allUsersList.length > 0 ?

            <table className='w-full text-sm custom-sc:text-base'>
              <thead className='bg-custom-navy/15'>
                <tr>
                  <th>شناسه</th>
                  <th>نام و نام‌خانوادگی</th>
                  <th className='hidden sm:table-cell'>نام کاربری</th>
                  <th className='hidden sm:table-cell'>شماره</th>
                  <th className='hidden custom-sc:table-cell'>نقش</th>
                  <th className='table-cell sm:hidden'>مشاهده</th>
                  <th>تغییر سطح</th>
                  <th>حذف</th>
                  <th className='hidden custom-sc:table-cell'>بن</th>
                </tr>
              </thead>

              <tbody>
                {
                  allUsersList.map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td className='hidden sm:table-cell'>{user.username}</td>
                      <td className='hidden sm:table-cell'>{user.phone}</td>
                      <td className='hidden custom-sc:table-cell'>{user.role}</td>
                      <td className='table-cell sm:hidden'><MdOutlineVisibility onClick={() => showUserInfo(user)} className='w-4 h-4 mx-auto cursor-pointer' /></td>
                      <td>
                        {
                          user.role === 'کاربر' ?
                            <button className=' px-1 custom-sc:px-3 py-1 custom-sc:py-1.5 text-xs md:text-sm text-white bg-green-700 rounded-md' onClick={() => updateUserRole(user)}>تغییر به ادمین</button>
                            : <button className=' px-1 custom-sc:px-3 py-1 custom-sc:py-1.5 text-xs md:text-sm text-white bg-sky-800 rounded-md' onClick={() => updateUserRole(user)}>تغییر به کاربر عادی</button>
                        }
                      </td>
                      <td>
                        <button className=' px-1 custom-sc:px-3 py-1 custom-sc:py-1.5 text-xs md:text-sm text-white bg-red-500 rounded-md' onClick={() => removeUser(user)}>حذف</button>
                      </td>
                      <td>
                        <button className='hidden custom-sc:table-cell  px-1 custom-sc:px-3.5 py-1 custom-sc:py-1.5 text-xs md:text-sm text-white bg-red-700 rounded-md'>بن</button>
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
