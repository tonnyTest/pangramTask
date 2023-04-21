import axios from "axios";
import React, { useState } from "react";
import { Link , useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


const ManagerDashboard =()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const navigate = useNavigate();

    // const products = [
    //     { id: 1, empName: 'George', depName: 'It', catName: 'B-class', location: 'Ahmedabad', salary: '5000' },
    //     { id: 2, empName: 'George', depName: 'It', catName: 'B-class', location: 'Ahmedabad', salary: '5000'  },
    //     { id: 3, empName: 'George', depName: 'It', catName: 'B-class', location: 'Ahmedabad', salary: '5000'  },
    //     { id: 4, empName: 'George', depName: 'It', catName: 'B-class', location: 'Ahmedabad', salary: '5000'  },
    //     { id: 5, empName: 'George', depName: 'It', catName: 'B-class', location: 'Ahmedabad', salary: '5000'  },
    //   ];

    const products = [
        { id: 1, name: 'George', animal: 'Monkey' },
        { id: 2, name: 'Jeffrey', animal: 'Giraffe' },
        { id: 3, name: 'Alice', animal: 'Giraffe' },
        { id: 4, name: 'Foster', animal: 'Tiger' },
        { id: 5, name: 'Tracy', animal: 'Bear' },
        { id: 6, name: 'Joesph', animal: 'Lion' },
        { id: 7, name: 'Tania', animal: 'Deer' },
        { id: 8, name: 'Chelsea', animal: 'Tiger' },
        { id: 9, name: 'Benedict', animal: 'Tiger' },
        { id: 10, name: 'Chadd', animal: 'Lion' },
        { id: 11, name: 'Delphine', animal: 'Deer' },
        { id: 12, name: 'Elinore', animal: 'Bear' },
        { id: 13, name: 'Stokes', animal: 'Tiger' },
        { id: 14, name: 'Tamara', animal: 'Lion' },
        { id: 15, name: 'Zackery', animal: 'Bear' }
      ];
    
      const columns = [
        { dataField: 'id', text: 'Id', sort: true },
        { dataField: 'name', text: 'Name', sort: true },
        { dataField: 'animal', text: 'Animal', sort: true }
      ];
    
      const defaultSorted = [{
        dataField: 'empName',
        order: 'desc'
      }];

      const pagination = paginationFactory({
        page: 2,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
          console.log('page', page);
          console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
          console.log('page', page);
          console.log('sizePerPage', sizePerPage);
        }
      });
    

//   const { SearchBar, ClearSearchButton } = Search;

    const handleSubmit = async (e) => {
        e.preventDefault();
            axios.post('http://localhost:8000/sendotp',{
                mode: 'no-cors',
                email: email,
                password: password
            })
            .then((response) => {
                if(response.data.message){
                    setLoginStatus(response.data.message);
                    console.warn(response);
                }else{
                    navigate("/email-send");
                    console.warn(response);
                }
            })
            .catch(err => {
            console.error(err);
            });
        }

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row col-md-12 text-center my-3" >
                   <h5>- Manager Dashboard -</h5>
                </div>
                <div className="row col-md-12" >
                    <BootstrapTable bootstrap4 keyField='ID' data={products} columns={columns} defaultSorted={defaultSorted} pagination={pagination} />
              </div>
            </div>
        </div>
    );
}


export default ManagerDashboard;



// // App.js
// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// import BootstrapTable from 'react-bootstrap-table-next';
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

// function App() {

//   const products = [
//     { id: 1, name: 'George', animal: 'Monkey' },
//     { id: 2, name: 'Jeffrey', animal: 'Giraffe' },
//     { id: 3, name: 'Alice', animal: 'Giraffe' },
//     { id: 4, name: 'Foster', animal: 'Tiger' },
//     { id: 5, name: 'Tracy', animal: 'Bear' },
//     { id: 6, name: 'Joesph', animal: 'Lion' },
//     { id: 7, name: 'Tania', animal: 'Deer' },
//     { id: 8, name: 'Chelsea', animal: 'Tiger' },
//     { id: 9, name: 'Benedict', animal: 'Tiger' },
//     { id: 10, name: 'Chadd', animal: 'Lion' },
//     { id: 11, name: 'Delphine', animal: 'Deer' },
//     { id: 12, name: 'Elinore', animal: 'Bear' },
//     { id: 13, name: 'Stokes', animal: 'Tiger' },
//     { id: 14, name: 'Tamara', animal: 'Lion' },
//     { id: 15, name: 'Zackery', animal: 'Bear' }
//   ];

//   const columns = [
//     { dataField: 'id', text: 'Id', sort: true },
//     { dataField: 'name', text: 'Name', sort: true },
//     { dataField: 'animal', text: 'Animal', sort: true }
//   ];

//   const defaultSorted = [{
//     dataField: 'name',
//     order: 'desc'
//   }];

//   const pagination = paginationFactory({
//     page: 2,
//     sizePerPage: 5,
//     lastPageText: '>>',
//     firstPageText: '<<',
//     nextPageText: '>',
//     prePageText: '<',
//     showTotal: true,
//     alwaysShowAllBtns: true,
//     onPageChange: function (page, sizePerPage) {
//       console.log('page', page);
//       console.log('sizePerPage', sizePerPage);
//     },
//     onSizePerPageChange: function (page, sizePerPage) {
//       console.log('page', page);
//       console.log('sizePerPage', sizePerPage);
//     }
//   });

//   const { SearchBar, ClearSearchButton } = Search;

//   const MyExportCSV = (props) => {
//     const handleClick = () => {
//       props.onExport();
//     };
//     return (
//       <div>
//         <button className="btn btn-success" onClick={handleClick}>Export to CSV</button>
//       </div>
//     );
//   };

//   return (
//     <div className="App">
//       <h5>React Bootstrap Table Next with Sorting, Pagination and Search</h5>

//       <ToolkitProvider
//         bootstrap4
//         keyField='id'
//         data={products}
//         columns={columns}
//         search
//         exportCSV
//       >
//         {
//           props => (
//             <div>
//               <h6>Input something at below input field:</h6>
//               <SearchBar  {...props.searchProps} />
//               <ClearSearchButton  {...props.searchProps} />
//               <hr />
//               <MyExportCSV {...props.csvProps} />
//               <BootstrapTable
//                 defaultSorted={defaultSorted}
//                 pagination={pagination}
//                 {...props.baseProps}
//               />

//             </div>
//           )
//         }
//       </ToolkitProvider>

//     </div>
//   );
// }

// export default App;