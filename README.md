# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
import React, { useState, useEffect } from 'react';
import Header from './components/header';
// import LetterList from './components/letter-list';
import './App.css' 
const EmploeeList = () => {

// const dataList = [
//   {id: 395, firstName: 'Gb', lastName: 'Rya', dob: '9-june-1981'},
//   {id: 39, firstName: 'Db', lastName: 'Rxy', dob: '29-april-1988'},
//   {id: 36, firstName: 'Rs', lastName: 'Ho', dob: '25-april-1983'},
//   {id: 33, firstName: 'As', lastName: 'Ade', dob: '13-march-1977'},
//   {id: 34, firstName: 'Gr', lastName: 'Cd', dob: '19-may-1999'},
//   {id: 35, firstName: 'Rt', lastName: 'Gd', dob: '23-october-1998'}
// ]

const [list, setList] = useState([])
  


  useEffect(() => {
    fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then(res => res.json())
      .then(data =>setList(data));
  }, []);
  
  list.sort((a, b) => {
    let nameA = a.lastName, nameB = b.lastName;
    if (nameA < nameB) {
      return -1;
    } 
    if (nameA > nameB) {
      return 1;
    } 
    return 0;
  });
  
  //const [value, setValue] = useState(1)
  //function changeHandler() { return (event) => event.target.value}
  // console.log(list)

  

  const copy = Object.assign([], list);

  
  //setList(copy)
  //console.log(copy)



  if (copy.length) {
    // console.log(new Date(copy[81].dob).toLocaleString('en', {month: 'long'}))

    for( let i = 0; i < copy.length; i+=5) {
      copy[i] = {...copy[i], active: 'active'}
    }
    let i = 64;
    let j = 0;
    var arr = [];
    let date = new Date()
    let currentMonth = date.getMonth()

    // console.log(currentMonth)

    var monthList = []
    var birthday = [];
    for (let i = 0; i < 12; i++) {
      birthday[i] = [] 
    }
    for (let elem of copy) {

      if (elem.active) {
        let dobForm = elem.dob.slice(0, 10).split('-')
        let numMonth = dobForm[1] - 1
        let dobMonth
        // console.log(elem.dob.slice(8,10), elem.dob.slice(11, 13))
        if (elem.dob.slice(8, 10) === '30' && Number(elem.dob.slice(11, 13)) > 20) {
          // console.log(elem.dob.slice(8, 10), elem.dob.slice(11, 13))
         //let str = elem.dob.slice(0, 11) + '20' + elem.dob.slice(13)
         
         dobMonth = new Date(elem.dob.slice(0, 11) + '20' + elem.dob.slice(13)).toLocaleString('en', {month: 'long'})
        //  console.log(str, dobMonth)
        } else {
         dobMonth = new Date(elem.dob).toLocaleString('en', {month: 'long'})
        }
        // switch (elem.lastName) {
        //   case 'Sanchez':
        //     dobMonth = 'September'
        //     break;
        //   case 'Peters':
        //     dobMonth = 'April'
        //     break;
        //     case 'Berry':
        //       dobMonth = 'April'
        //       break;  
        //   default:
        //     dobMonth = new Date(elem.dob).toLocaleString('en', {month: 'long'})
        //     break;
        // }
        //elem.lastName === 'Sanchez' ?  dobMonth = 'September' : dobMonth = new Date(elem.dob).toLocaleString('en', {month: 'long'})
        dobForm[1] = dobMonth + ','
        dobForm = dobForm.reverse().join(' ')

        // console.log(currentMonth, numMonth)
    
        let index = numMonth - currentMonth >= 0 ? numMonth - currentMonth : numMonth - currentMonth + 12
        
        // console.log(index, dobMonth)

        monthList[index] = dobMonth 
        // console.log(monthList)
      
        birthday[index].push([elem.id, elem.lastName, ' ', elem.firstName,' - ', dobForm, ' year'])
        
      }

      let letter = elem.lastName.charCodeAt(0);
      
      if (letter === i) {
        arr[j - 1].push([elem.id, elem.lastName, ' ', elem.firstName])
      } else { 
        if (letter > i) { 
          for (let k = i + 1; k < letter; k++) {
            arr[j] = [String.fromCharCode(k)]
            j++;
          }
          i += (letter - i);
          arr[j] = [String.fromCharCode(i)];
          arr[j].push([elem.id, elem.lastName, ' ', elem.firstName])
          j++;
        }
      } 
    } 
    let len = copy[copy.length - 1].lastName.charCodeAt(0);
    if (len < 90 ) {
      for (let m = len + 1; m <= 90; m++){
        arr[j] = [String.fromCharCode(m)]
        j++;
      }
    } 
      
  }
  // console.log(arr) 

  const copyArr = Object.assign([], arr);
  //console.log(copyArr) 

  // const E = (props) => {
  //   console.log(props)
  //   return <div>
  //     {props}
  //   </div>
  // }
  
  // if (copyArr.length) {
  //   birthday = copyArr[6].slice(1,2)
  // }

  // console.log(birthday)
  // console.log(monthList)
  //const copymonthList = Object.assign([], monthList);
  const copyBirthday = Object.assign([], birthday);
  // //birthday.sort()
  const [value, setValue] = useState(1)
  let count = -1
  const birthdayList = copyBirthday.map(elem => {
    count++
    return  <ul key={count} className="ul-style"> {monthList[count]}
    
    {elem?.map(item => {
      return <li key={item.slice(0, 1)} className="li-style">{item.slice(1)}

      </li>
  })}
   
   </ul>
   
  })

  
    const employees = copyArr.map(elem => {
      return <section className="wrapper-left" key={elem[0].charCodeAt(0)}>
        <div className="letter">
          {elem[0]}
        </div>
        <div className="empty">
          {elem.slice(1).length === 0 ? '-----' : ''}
        </div>
        {elem.slice(1)?.map(item => {
          //const [value, setValue] = useState(1)
          return <div className="elem" key={item[0]}>
            <div className="last-first-name">
              {item.slice(1)}
            </div>
            <div className="radio">
              <input type="radio"  name="item[0]"  value="1" checked={value === '1' ? true : false} onChange={(event) => setValue(event.target.value)}  /> not active 
              <br />
              <input type="radio" name="item[0]"  value="1" checked={value === '2' ? true : false} onChange={(event) => setValue(event.target.value)}/>  active
            </div>     
          </div>
        })} 
      </section> 
    });
    return ( 
    
      <div className="elems">
       
          <div className="elems-left">
            {employees}
          </div>  
      
        <div className="elems-right">
            {/* {.length === 0 ? 'Employeers list is empty' : ''} */}
            {birthdayList} 
        </div>  
      </div>  
     
    );
  };




const App = () => {
  
  return (
    <div>
      <Header />
      <EmploeeList />
    </div>      
    
  );
}

export default App;
