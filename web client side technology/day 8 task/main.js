window.onload = function () {
    const nameInput = document.querySelector('input[name="name"]');
    const ageInput = document.querySelector('input[name="age"]');
    const courseSelect = document.querySelector('select[name="languages"]');
    const addBtn = document.querySelector('form button[type="submit"]');
    const deleteLastBtn = document.querySelector('form button:not([type="submit"])');
    const table = document.querySelector('table');
    const deleteAllBtn = document.querySelector('.data button');

    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

    function validate(){
        let isValid = true;

        if(nameInput.value.trim().length === 0 || nameInput.value.trim().length > 12){
            nameInput.classList.add("error");
            isValid = false;
        }else{
            nameInput.classList.remove("error");
        }

        const age=Number(ageInput.value);
        if(isNaN(age) || age < 18 || age > 60) {
            ageInput.classList.add("error");
            isValid = false;
        }else{
            ageInput.classList.remove("error");
        }

        if([...courseSelect.selectedOptions].length === 0){
            courseSelect.classList.add("error");
            isValid = false;
        }else{
            courseSelect.classList.remove("error");
        }

        return isValid;
    }

    addBtn.addEventListener("click", function (e) {
        e.preventDefault();

        if(!validate()) return;

        const name = nameInput.value.trim();
        const age = ageInput.value.trim();
        const courses = [...courseSelect.selectedOptions].map(opt => opt.text).join(", ");
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${courses}</td>
            <td><button class="delete-row">Delete</button></td>`;

        row.querySelector(".delete-row").addEventListener("click", () => {
            row.remove();
        });

        tbody.appendChild(row);

        nameInput.value = "";
        ageInput.value = "";
        courseSelect.selectedIndex = -1;
    })

    deleteLastBtn.addEventListener("click", function (e){
        e.preventDefault();
        const rows=tbody.querySelectorAll("tr");
        if(rows.length>0){
            rows[rows.length - 1].remove();
        }
    })

    deleteAllBtn.addEventListener("click", function (){
        tbody.innerHTML = "";})





    nameInput.addEventListener("input", () =>{
        if (nameInput.value.trim().length <= 12){
            nameInput.classList.remove("error");
        }});

    ageInput.addEventListener("input", () =>{
        ageInput.classList.remove("error");
    });

    courseSelect.addEventListener("change", () =>{
        courseSelect.classList.remove("error");
    });
}