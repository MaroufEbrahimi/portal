import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Function to download React component as PDF
const downloadComponentAsPDF = (containerId) => {
    const container = document.getElementById(containerId);

    html2canvas(container).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const width = pdf.internal.pageSize.getWidth();
        const height = (canvas.height * width) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, width, height);
        pdf.save('component.pdf');
    });
};

export default downloadComponentAsPDF;