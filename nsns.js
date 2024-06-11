
  let address = JSON [];
  function addaddress() {
    
    let valueAddress = document.getElementById("addAddress").value;
    
    let addAddress = {
      content: valueAddress,
      id: Math.floor(Math.random() * 99999999),
    };
    
    address.push(addAddress);
    
    console.log("address", address);
    renderAddress();
  }
  let users = ""
  function renderAddress() {
    let table='';
    for (let i = 0; i< users.length; i++) {
    table+=`
    <tr>
            <td>${i+1}</td>
            <td>${users[i].id}</td>
            <td>${users[i].name}</td>
            <td>${users[i].email}</td>
            <td>
                <button id='button1' onclick=updateEmployee(${i}) >Sửa</button>
                <button id='button2' onclick=deleteEmployee(${i}) >Xóa</button>
            </td>
        </tr>
    `
        }
        console.log('table',table);
        document.getElementById('table').innerHTML=table;  
    }
    renderAddress();
    
            
        
        
  
    function deleteProduct(address) {
        for (let i = 0; i < address.length; i++) {
            if (i=address[i]) {
        const name = JSON.parse(localStorage.getItem("name"));
        console.log(name[adddress]);
      
        name.splice(content,1);
       
        localStorage.setItem("name", JSON.stringify(name));
       
        address();
            }
      }
    }
      

