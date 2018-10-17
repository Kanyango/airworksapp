import { Component, OnInit, Input } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
    selector: 'acstatus-component',
    templateUrl: './acstatus.html'
})

export class ACStatusComponent
{
  
  print()
    {
        html2canvas(document.getElementById('status')).then(function(canvas)
        {
            var img = canvas.toDataURL("image/png");
            var doc = new jsPDF();
            doc.addImage(img,'JPEG',0,20);
            doc.save('testCanvas.pdf');
        });
    }

}
