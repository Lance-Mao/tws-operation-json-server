window.onload = function () {
    function render() {
        axios.get('http://localhost:3000/weather_data')
            .then(function (response) {
                console.log(response.data);
                const list = document.getElementById('showResults');
                let _html = "";
                response.data.forEach(item => {
                    _html += `<ul><li>
            <img src="` + item.dayPictureUrl + `" />
            <span>` + item.date + `</span>
            <span>` + item.weather + `</span>
            <span>` + item.wind + `</span>
            <span>` + item.temperature + `</span>
            <button data-id = ` + item.id + `>删除此条记录</button>
        </li></ul>`
                });

                list.innerHTML = _html

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render();

    document.addEventListener('click', handleDelData, false);

    function handleDelData(e) {
        let dataId = e.target.getAttribute("data-id");
        if (dataId) {
            let confirmDel = confirm("确定删除？");
            if (confirmDel) {
                delDataById(dataId);
            } else {
                return;
            }
        } else {
            return;
        }
    }

    function delDataById(id) {
        axios.delete(`http://localhost:3000/weather_data/${id}`)
            .then(function (response) {
                if (response.status === 200) {
                    render();
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
};