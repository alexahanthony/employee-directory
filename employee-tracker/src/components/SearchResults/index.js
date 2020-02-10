import React from "../../../node_modules/react";
import "./style.css";


// function sortTable(f,n){
//   var rows = document.getElementById('#col-name tbody  tr').get();

//   rows.sort(function(a, b) {

//       var A = getVal(a);
//       var B = getVal(b);

//       if(A < B) {
//           return -1*f;
//       }
//       if(A > B) {
//           return 1*f;
//       }
//       return 0;
//   });

//   function getVal(elm){
//       var v = document.getElementById(elm).children('td').eq(n).text().toUpperCase();
//       if(document.getElementById(elm).isNumeric(v)){
//           v = parseInt(v,10);
//       }
//       return v;
//   }

//   document.getElementById.each(rows, function(index, row) {
//     document.getElementById('#col-name').children('tbody').append(row);
//   });
// }

// // flag to toggle the sorting order
// var f_image = 1;
// var f_name = 1; 
// var f_phone = 1; 
// var f_email = 1; 
// var f_dob = 1; 
// document.getElementById("#col-image").click(function(){
//   f_image *= -1; // toggle the sorting order
//   var n = document.getElementById(this).prevAll().length;
//   sortTable(f_image,n);
// });
// document.getElementById("#col-name").click(function(){
//   f_name *= -1; // toggle the sorting order
//   var n = document.getElementById(this).prevAll().length;
//   sortTable(f_name,n);
// });
// document.getElementById("#col-phone").click(function(){
//   f_phone *= -1; // toggle the sorting order
//   var n = document.getElementById(this).prevAll().length;
//   sortTable(f_phone,n);
// });
// document.getElementById("#col-email").click(function(){
//   f_email *= -1; // toggle the sorting order
//   var n = document.getElementById(this).prevAll().length;
//   sortTable(f_email,n);
// });
// document.getElementById("#col-dob").click(function(){
//   f_dob *= -1; // toggle the sorting order
//   var n = document.getElementById(this).prevAll().length;
//   sortTable(f_dob,n);
// });




function SearchResults(props) {
  return (
    <table id="resultTable" className="list-group search-results">
      <thead>
        <tr>
          <th id="col-image">Image</th>
          <th id="col-firstname">Name</th>
          {/* <th id="col-lastname">Last Name</th> */}
          <th id="col-phone">Phone</th>
          <th id="col-email">Email</th>
          <th id="col-dob">D.O.B.</th>
        </tr>
       
      {props.results.map(result => (
        <tr key={result} className="list-group-item">
          <td id="col-image"><img alt="User" src={result.picture.thumbnail} className="img-fluid" /></td>
          <td id="col-firstname">{result.name.first}</td>
          <td id="col-lastname">{result.name.last}</td> 
          <td id="col-phone">{result.phone}</td> 
          <td id="col-email">{result.email}</td> 
          <td id="col-dob">{result.dob.date.substring(0,10)}</td>
        </tr>
      ))}
       </thead>
    </table>
  );
}

export default SearchResults;

// function SearchResults(props) {
//   return (
//     <ul className="list-group search-results">
//       {props.results.map(result => (
//         <li key={result} className="list-group-item">
//           <img alt="User" src={result.picture.thumbnail} className="img-fluid" />
//           <h5>{result.name.first} {result.name.last} {result.phone} {result.email} {result.dob.date}</h5>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default SearchResults;