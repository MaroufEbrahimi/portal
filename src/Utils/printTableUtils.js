
export const handlePrintTable = (pageTitle = 'جدول حاضری', style) => {
  const printContent = document.getElementById('attendance_table_container');
  const printWindow = window.open('', '_blank');
  const htmlContent = `
    <html>
      <head>
      <title>${pageTitle}</title>
      <link rel="stylesheet" href="/css/bootstrap-icons.css">
        <style>

          :root{
            --gen-color: #40e0f1;
            --gen-color-hover: #40e0f1;
            --gen-bg-color: #ffffff94;
            --gen-main-bg: #ffffff85;
            --navbar-bg: #ffffff54;
            --text-color: #000;
            --icon-faculties-color: #fff;
            --btn-bg-color: #6dc7f1f3;
            --show-color: #22222283;
            --input-box-color: #fff;
            --light-dark: #fff
          }
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: vazir_l, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
              "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
              sans-serif;
            scroll-behavior: smooth;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            direction: rtl;
          }
          ${style}
        </style>
      </head>
      <body>
        ${printContent.innerHTML}
      </body>
    </html>
  `;
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  setTimeout(() => {
    printWindow.print();
  }, 500);

};
