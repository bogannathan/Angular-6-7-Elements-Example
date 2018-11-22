import { Component, ViewEncapsulation, OnInit, ChangeDetectorRef } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  title = 'let\'s shout!'
  results: string[] = []

  constructor(private httpService: HttpClient, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('up and running!')
  }
  public onSearch(searchTerm): void {
    console.log('search', searchTerm)
    this.httpService.post(`https://cors-anywhere.herokuapp.com/HTTP://API.SHOUTCLOUD.IO/V1/SHOUT`, { INPUT: searchTerm })
      .subscribe((res: any) => {
        this.results.push(res.OUTPUT)
        this.changeDetectorRef.detectChanges()
        // for some reason, elements will not update while injected in an angular app unless method is called by enter key
        // clicking does not update dom, so must manually check
      })
  }
}
