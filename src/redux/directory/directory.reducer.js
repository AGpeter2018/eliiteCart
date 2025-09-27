const INITIAL_STATE = {
  sections: [
    {
      title: "HATS",
      imageUrl:
        "https://images.unsplash.com/photo-1513105737059-ff0cf0580ae6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcHxlbnwwfHwwfHx8MA%3D%3D",
      id: 1,
      linkUrl: "/shop",
    },
    {
      title: "JACKETS",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1676212689512-5b66701912d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGphY2tldHN8ZW58MHx8MHx8fDA%3D",
      id: 2,
      linkUrl: "",
    },
    {
      title: "SNEAKERS",
      imageUrl:
        "https://media.istockphoto.com/id/1614270266/photo/shoes-fitness-and-person-walking-or-hiking-for-outdoor-exercise-workout-or-training-as-health.webp?a=1&b=1&s=612x612&w=0&k=20&c=lWNqFlwyZCwTTqh118MdgogcMYuhpyt0MScGXWUs7c0=",
      id: 3,
      linkUrl: "",
    },
    {
      title: "WOMENS",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1690038780540-0ecaf08f6099?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHdvbWVuc3xlbnwwfHwwfHx8MA%3D%3D",
      size: "large",
      id: 4,
      linkUrl: "",
    },
    {
      title: "Mens",
      imageUrl:
        "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnN8ZW58MHx8MHx8fDA%3D",
      size: "large",
      id: 5,
      linkUrl: "",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

export default directoryReducer;
