export const attendanceTableStyles = `
/* Attendance Content */
          .attendance_content {
            margin: 2rem 0 0.8rem 0;
            border: 1px solid var(--gen-color);
            width: 100%;
            border-radius: 1px;
            padding: 15px 10px;
            overflow-x: scroll;
          }

          /* Attendance Header */
          .attendance_header {
            display: flex;
            gap: 5px;
            width: 100%;
          }


          .attendance_header_boxes {
            display:grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 5px;
            min-width: 770px;
            max-width: 100%;
            flex: 1;
          }

          .attendance_header_boxes .attendance_header_box {
            border: 1px solid var(--gen-color);
            width: 100%;
          }

          .attendance_header_boxes .attendance_header_box p {
            font-size: 14.5px;
            padding: 3px;
          }

          .attendance_header_boxes .attendance_header_box p:first-child {
            background-color: var(--gen-bg-color);
            font-size: 15px;
            font-weight: bold;
          }

          /* keys */
          .attendance_header_keys {
            min-width: 194px;
            max-width: 100%;
            border: 1px solid var(--gen-color);
            border-collapse: collapse;
          }

          .attendance_header_keys tr {
            border: 1px solid var(--gen-color);
            width: 100%;
            text-align: center;
          }

          .attendance_header_keys tr th {
            border-collapse: collapse;
            background-color: var(--gen-bg-color);
          }

          .attendance_header_keys tr td {
            font-size: 14px;
            font-weight: bold;
            border: 1px solid var(--gen-color);
          }

          /* End of Attendance Header */

          .attendance_table {
            margin-top: 1.7rem;
            border: 1px solid #000;
            border-collapse: collapse;
            min-width: 970px;
            width: 100%;
          }

          .holiday {
            background-color: var(--gen-bg-color);
            border: 1px solid var(--gen-bg-color);
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

          .attendance_table tr .data_cell input[type="checkbox"] {
            accent-color: blue;
          }

          .attendance_status_box {
              width: 20px;
              height: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              /* border: 1px solid var(--gen-color); */
          }

          .attendance_status_box i {
              margin-top: 6px;
          }
`;