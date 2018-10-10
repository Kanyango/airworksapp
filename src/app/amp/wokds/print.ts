import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
    selector: 'print-component',
    templateUrl: './print.html'
})

export class PrintWorkOrdersComponent
{

    print()
    {
        html2canvas(document.getElementById('results')).then(function(canvas)
        {
            var img = canvas.toDataURL("image/png");
            var doc = new jsPDF();
            doc.addImage(img,'JPEG',0,20);
            doc.save('testCanvas.pdf');
        });
    }

}