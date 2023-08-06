export const handlePrintTable = ({ pageTitle = 'جدول حاضری' }) => {
    const printContent = document.getElementById('attendance_table_container');
    const printWindow = window.open('', '_blank');
    const htmlContent = `
    <html>
      <head>
      <title>${pageTitle}</title>
        <style>
          @media print {
            * {
              padding: 0;
              margin: 0;
              box-sizing: border-box;
              font-family: vazir_l, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
              scroll-behavior: smooth;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              direction: rtl;
            }
            .attendance_content {
              direction:rtl;
              margin: 3rem 0 2rem 0;
              border: 1px solid var(--gen-color);
              width: 100%;
              border-radius: 1px;
              padding: 15px 10px;
              overflow-x: scroll;
            }

            .attendance_table {
              border: 1px solid #000;
              border-collapse: collapse;
              min-width: 970px;
            }

            .holiday {
              background-color: #ff000045;
              border: 1px solid #ff000045;
            }

            tr {
              height: 20px;
            }

            .attendance_table tr {
              row-gap: 1px;
            }

            .attendance_table #number_counter {
              width: 30px;
            }

            .attendance_table #student_name,
            .attendance_table #student_lastname {
              width: 100px;
            }

            .attendance_table tr:nth-child(even) {
              background-color: var(--gen-bg-color);
            }

            .attendance_table thead tr td {
              font-size: 12px;
              font-weight: bold;
            }

            .attendance_table tr td {
              border: 1px solid var(--gen-color);
              font-size: 12px;
              padding: 2px;
              width: 2rem;
              text-align: center;
            }

            .attendance_table tr .data_cell {
              text-align: center;
              padding: 2px;
              align-items: center;
              justify-content: center;
              position: relative;
              width: 1.44rem;
              height: 0.5rem;
            }

            .attendance_table tr .data_cell input {
              position: absolute;
              top: 3px;
              left: 3px;
              right: 3px;
              bottom: 3px;
            }
          }
        </style>
      </head>
      <body>
        ${printContent.innerHTML}
      </body>
    </html>
  `;
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.print();
};