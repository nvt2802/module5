let courses = [ 
    { 
      id: 1, 
      title: "ReactJS Tutorial", 
      rating: 4.2, 
    }, 
    { 
      id: 2, 
      title: "Angular Tutorial", 
      rating: 2.5, 
    }, 
    { 
      id: 3, 
      title: "VueJS Tutorial", 
      rating: 3.8, 
    }, 
    { 
      id: 4, 
      title: "Java Tutorial", 
      rating: 4, 
    }, 
    { 
      id: 5, 
      title: "JavaScript Tutorial", 
      rating: 3.5, 
    }, 
  ];

let coursesGreaterThan4 = courses.filter((Element) => Element.rating >=4)
console.log(coursesGreaterThan4);

// let filteredCourses = courses.filter((item) => item.rating < 4);

let formattedCourses = courses.filter((item) => item.rating < 4).map((item) => item.id +"-"+item.title+"-"+item.rating);

console.log(formattedCourses);

let addedCourses = [ 
    { 
      id: 6, 
      title: "PHP Tutorial", 
      rating: 3, 
    }, 
    { 
      id: 7, 
      title: "C# Tutorial", 
      rating: 2, 
    }, 
    { 
      id: 8, 
      title: "Docker Tutorial", 
      rating: 3.8, 
    } 
  ]; 

  const mergeCourses = (courses, addedCourses) => [...courses, ...addedCourses];
  console.log(mergeCourses(courses, addedCourses));