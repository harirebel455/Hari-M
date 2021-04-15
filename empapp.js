let employees=getAllEmployees();
console.log(employees);

let displayEmployees=(employees)=>
{
	let recordFound=employees.length;
	document.querySelector("#count").innerText=recordFound;

	let tableBody=document.querySelector("#table-body");

	let tableRows=' ';
	for(let employee of employees)
	{
        tableRows+=`<tr>
                    <td>${employee.id}</td>
                    <td>${employee.first_name}</td>
                    <td>${employee.last_name}</td>
                    <td>${employee.email}</td>
                    <td>${employee.gender}</td>
                    <td>${employee.country}</td>
                    </tr>`
	}
	tableBody.innerHTML=tableRows;
}


let allEmpBtn=document.querySelector("#all-emp-btn");
allEmpBtn.addEventListener('click',function()
{
       displayEmployees(employees)
});



let maleEmpBtn=document.querySelector("#male-emp-btn");
maleEmpBtn.addEventListener('click',function()
{
  let maleEmps=employees.filter((employee)=>
  {
     return employee.gender==='Male';
  });
    displayEmployees(maleEmps);
});





let femaleEmpBtn=document.querySelector("#female-emp-btn");
femaleEmpBtn.addEventListener('click',function()
{
	let FemaleEmps=employees.filter((employee)=>
	{
		return employee.gender==='Female'
	})
	displayEmployees(FemaleEmps);
})



let searchBox=document.querySelector("#emp-search")
searchBox.addEventListener('keyup',function()
{
	let textEnterd=searchBox.value;
	if(textEnterd==='')
	{
		displayEmployees([])
	}
	else if(textEnterd.length===0)
	{
		displayEmployees([])
	}
	else
	{
		let filterEmps=employees.filter((employee)=>
		{
			return employee.first_name.toLowerCase().trim().startsWith(textEnterd.toLowerCase().trim());
		});
		displayEmployees(filterEmps);
	}
})