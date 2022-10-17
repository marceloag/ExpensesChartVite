import { Bar } from 'react-chartjs-2';
import * as ChartJS from 'chart.js';
const {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} = ChartJS;

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  borderRadius: 6,
  borderSkipped: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      displayColors: false,
      yAlign: 'bottom',
      padding: {
        left: 12,
        right: 12,
        top: 6,
        bottom: 6
      },
      caretSize: 0,
      label: 'No',
      bodyFont: {
        size: 14,
        family: 'DM Sans'
      },
      callbacks: {
        label: function (context) {
          return '$' + context.parsed.y;
        },
        title: () => null
      }
    }
  },
  title: {
    display: false
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      display: false,
      grid: {
        display: false
      }
    }
  }
};

function ExpensesChart() {
  return (
    <div>
      <Bar
        options={options}
        data={{
          labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
          datasets: [
            {
              id: 1,
              data: [15, 20, 52.3, 31.07, 28, 35, 22],
              backgroundColor: 'hsl(10, 79%, 65%)',
              hoverBackgroundColor: 'hsl(186, 34%, 60%)'
            }
          ]
        }}
        height={380}
        width={800}
      />
    </div>
  );
}

export default ExpensesChart;
