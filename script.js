$(function(){
    var ctx = document.getElementById("myChart");
    var ctx1 = document.getElementById("myChart1");
    var ctx2 = document.getElementById("myChart2");
    var myChart = new Chart(ctx, 
    {
        type: 'pie',
        data: {
            datasets: [{
                label: '# of Tomatoes',
                data: [50, 50],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: 40,
            responsive: false,
            title: {
                fontSize: 24,
                display: true,
                text: 'C++',
            },
        }
    });
    var myChart = new Chart(ctx1, 
    {
        type: 'pie',
        data: {
            datasets: [{
                label: '# of Tomatoes',
                data: [70, 30],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: 40,
            responsive: false,
            title: {
                fontSize: 24,
                display: true,
                text: 'Python',
            },
        }
    });
    var myChart = new Chart(ctx2, 
    {
        type: 'pie',
        data: {
            datasets: [{
                label: '# of Tomatoes',
                data: [20, 80],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: 40,
            responsive: false,
            title: {
                fontSize: 24,
                display: true,
                text: 'HTML/CSS/Javascript',
            },
        }
    });
});