import Chart from 'chart.js/auto';

const DetaildeDashBoard = () => {
  window.onload = () => {
    // const ctx = document.getElementById('myChart');
    const ctx1 = document.getElementById("myChart1");
    const ctx2 = document.getElementById("myChart2");
    // const ctx3 = document.getElementById('myChart3');

    // new Chart(ctx, {
    //     type: 'bar',
    //     data: {
    //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //       datasets: [{
    //         label: '# of Votes',
    //         data: [12, 19, 3, 5, 2, 3],
    //         borderWidth: 1
    //       }]
    //     },
    //     options: {
    //       scales: {
    //         y: {
    //           beginAtZero: true
    //         }
    //       }
    //     }
    //   });

    new Chart(ctx1, {
      type: "doughnut",
      data: {
        labels: ["sick", "healthy", "addmitted"],
        datasets: [
          {
            label: "Health data set 2024",
            data: [50, 300, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(144, 238, 144)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });

    new Chart(ctx2, {
      type: "radar",
      data: {
        labels: [
          "Eating",
          "Drinking",
          "Sleeping",
          "Designing",
          "Coding",
          "Cycling",
          "Running",
        ],
        datasets: [
          {
            label: "Sick",
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)",
          },
          {
            label: "Healthy",
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(54, 162, 235)",
          },
        ],
      },
      options: {
        elements: {
          line: {
            borderWidth: 3,
          },
        },
      },
    });

    // new Chart(ctx3, {
    //     type: 'line',
    //     data: {
    //         labels: [
    //             'January',
    //             'Febuary',
    //             'March',
    //             'April',
    //             'May',
    //             'June',
    //             'July'
    //         ],
    //         datasets: [{
    //           label: 'Raidar - Health Tracker',
    //           data: [65, 59, 80, 81, 56, 55, 40],
    //           fill: false,
    //           borderColor: 'rgb(75, 192, 192)',
    //           tension: 0.1
    //         }]
    //       }
    // });
  };

  const appointments = [
    {
      id: 1,
      patient: "John Doe",
      date: "2025-06-26",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      patient: "Jane Smith",
      date: "2025-06-27",
      time: "2:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      patient: "Michael Scott",
      date: "2025-06-28",
      time: "11:30 AM",
      status: "Cancelled",
    },
  ];

  const patients = [
    {
      id: 1,
      name: "John Doe",
      age: 34,
      condition: "Flu",
      lastVisit: "2025-06-20",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      condition: "Asthma",
      lastVisit: "2025-06-18",
    },
    {
      id: 3,
      name: "Michael Scott",
      age: 45,
      condition: "Diabetes",
      lastVisit: "2025-06-10",
    },
  ];

  const logs = [
    { time: "09:00 AM", activity: "Checked in patient John Doe" },
    { time: "10:15 AM", activity: "Updated prescription for Jane Smith" },
    { time: "12:00 PM", activity: "Logged out" },
  ];

  return (
    // <div className="p-6 space-y-6 font-sans">
    //   <h1 className="text-3xl font-bold mb-6">Doctor Dashboard</h1>
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    //     <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
    //       <h2 className="text-xl font-semibold mb-2 text-blue-600">Total Patients</h2>
    //       <p className="text-4xl font-bold">{patients.length}</p>
    //     </div>
    //     <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
    //       <h2 className="text-xl font-semibold mb-2 text-green-600">Appointments</h2>
    //       <p className="text-4xl font-bold">{appointments.length}</p>
    //     </div>
    //     <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
    //       <h2 className="text-xl font-semibold mb-2 text-purple-600">Activity Logs</h2>
    //       <p className="text-4xl font-bold">{logs.length}</p>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full h-full flex justify-center items-center flex-col px-1">
      <div className="w-full h-1/12 md:pl-8 pl-2">
        <h1 className="text-3xl font-semibold">DashBoard</h1>
        <h3 className="text-sm font-thin text-red-400">Health Data Tracker</h3>
      </div>
      <div className="w-full flex justify-around items-center h-6/12">
        <div className="md:w-[40%] w-[60%] h-11/12 shadow-xl bg-gray-200 flex justify-center items-center rounded-xl">
          <canvas id="myChart2"></canvas>
        </div>
        <div className="md:w-[50%] w-[30%] h-11/12 shadow-xl bg-gray-200 rounded-xl p-1 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-1 md:p-4 rounded-lg shadow hover:shadow-md transition">
              <h2 className="font-semibold mb-2 text-blue-600">
                Total Patients
              </h2>
              <p className="text-lg font-bold">{patients.length}</p>
            </div>
            <div className="bg-white p-1 md:p-4 rounded-lg shadow hover:shadow-md transition">
              <h2 className="font-semibold mb-2 text-green-600">
                Appointments
              </h2>
              <p className="text-lg font-bold">{appointments.length}</p>
            </div>
            <div className="bg-white p-1 md:p-4 rounded-lg shadow hover:shadow-md transition">
              <h2 className="font-semibold mb-2 text-purple-600">
                Activity Logs
              </h2>
              <p className="text-lg font-bold">{logs.length}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-around items-center h-6/12">
        <div className="md:w-[50%] w-[30%] h-11/12 shadow-xl bg-gray-200 rounded-xl"></div>
        <div className="md:w-[40%] w-[60%] h-11/12 shadow-xl bg-gray-200 flex justify-center items-center rounded-xl">
          <canvas id="myChart1"></canvas>
        </div>
      </div>
      {/* <div className='w-full h-11/12 my-4 overflow-auto'>
            <div className='block lg:flex w-full justify-center items-center'>
                <div className='p-6 bg-gray-200 rounded-xl lg:w-1/2 shadow-xl'>
                    <canvas id="myChart3"></canvas>
                </div>
                <div className='p-6 bg-gray-200 rounded-xl lg:w-1/2 shadow-xl'>
                    <canvas id="myChart1"></canvas>
                </div>
            </div>
            <div className='block lg:flex justify-center items-center w-full'>
                <div className='p-6 bg-gray-200 rounded-xl lg:w-1/2 shadow-xl'>
                    <canvas id="myChart2"></canvas>
                </div>
                <div className='p-6 bg-gray-200 rounded-xl lg:w-1/2 shadow-xl'>
                    <canvas id="myChart"></canvas>
                </div>
            </div>
        </div> */}
    </div>
  );
};

export default DetaildeDashBoard;
