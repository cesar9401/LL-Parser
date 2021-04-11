import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	cntline: any;
	line: string = '0';

	keyup(obj, e)
	{
		if(e.keyCode >= 33 && e.keyCode <= 40) // arrows ; home ; end ; page up/down
		this.selectionchanged(obj);
	}

	selectionchanged(obj)
	{
		var substr = obj.value.substring(0,obj.selectionStart).split('\n');
		var row = substr.length;
		var col = substr[substr.length-1].length;
		var tmpstr = '(' + row.toString() + ',' + col.toString() + ')';
		// if selection spans over
		if(obj.selectionStart != obj.selectionEnd)
		{
			substr = obj.value.substring(obj.selectionStart, obj.selectionEnd).split('\n');
			row += substr.length - 1;
			col = substr[substr.length-1].length;
			tmpstr += ' - (' + row.toString() + ',' + col.toString() + ')';
		}
		this.line = tmpstr;
		console.log(this.line);
	}

	input_changed(obj_txt)
	{
		let obj_rownr = document.getElementsByTagName('textarea')[0];
		this.cntline = this.count_lines(obj_txt.value);
		if(this.cntline == 0) this.cntline = 1;
		let tmp_arr = obj_rownr.value.split('\n');
		let cntline_old = parseInt(tmp_arr[tmp_arr.length - 1], 10);
		// if there was a change in line count
		if(this.cntline != cntline_old)
		{
			obj_rownr.cols = this.cntline.toString().length; // new width of txt_rownr
			this.populate_rownr(obj_rownr, this.cntline);
			this.scroll_changed(obj_txt);
		}
		this.selectionchanged(obj_txt);
	}

	scroll_changed(obj_txt)
	{
		let obj_rownr = document.getElementsByTagName('textarea')[0];
		this.scrollsync(obj_txt,obj_rownr);
	}

	scrollsync(obj1, obj2)
	{
		// scroll text in object id1 the same as object id2
		obj2.scrollTop = obj1.scrollTop;
	}

	populate_rownr(obj, cntline)
	{
		let tmpstr = '';
		for(let i = 1; i <= cntline; i++)
		{
			tmpstr = tmpstr + i.toString() + '\n';
		}
		this.line = tmpstr;
		//document.getElementsByTagName('textarea')[0].value = tmpstr;
	}

	count_lines(txt)
	{
		if(txt == '')
		{
			return 1;
		}
		return txt.split('\n').length + 1;
	}

}
