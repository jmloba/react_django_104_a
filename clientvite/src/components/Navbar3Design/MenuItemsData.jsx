
export const menuItemsData=[
  {
    title:'Home',
    url:'/'
  },
  {
    title:'Tutorial',
    submenu:[
      {title:'Dashboard', url:'/dashboard'},
      {title:'Department', url:'/department'},

      {title:'Project',
      submenu:[
      {title:'View Project', url:'/app_project'},
      ]
      },

      {title:'Employee',
      submenu:[
      {title:'View List Employee', url:'/employees'},
      ]
      },

      {title:'Books',
      submenu:[
      {title:'View List Books', url:'/books'},
      {title:'Add Books', url:'/books-add'},
      ]
      },


      // {title:'Employee',
      //   submenu:[
      //   {title:'View Employee', url:'/employees'},
      //   {title:'Project',
      //     submenu :[
      //       {title : 'Project List', url:'/app_project'},
      //       // {title : 'React Material UI'}
      //             ]
      //   },
      //   ]
      // },
      
    ]
  
  },

  {
    title:'Services',
    submenu:[
      {title: 'service1'},
      {title: 'service2'},

    ]
  },

  //   {
  //   title:'Logout',url:'/logout'
  // },


]