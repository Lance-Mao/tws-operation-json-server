window.onload = function () {
    let add = document.getElementById("add");
    const form = document.getElementById("addForm");


    add.addEventListener('click', e => {
        e.preventDefault();
        const dataList = getFormData('addForm');
        console.log(dataList, "表单数据");
        axios.post('http://localhost:3000/weather_data', dataList)
            .then(function (response) {
                alert('添加成功');
                form.reset();
            })
            .catch(function (error) {
                console.log(error);
            });
    });

    function getFormData(formId) {
        const form = document.getElementById(formId);
        let tagElements = form.getElementsByTagName('input');
        let dataList = {};
        for (let item of tagElements) {
            dataList[item.name] = item.value;
        }
        return dataList;
    }
};