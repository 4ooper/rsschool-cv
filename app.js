const inputs = document.querySelectorAll(".filters input");

function handleUpdate()
    {
        console.log(this.value);
    }

inputs.forEach(input => input.addEventListener('change',handleUpdate));
