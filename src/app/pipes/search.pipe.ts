import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: { title: string }[], searchValue: string): any[] {
    return items && items.length && searchValue ? items.filter((item => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase())
    })) : items
  }

}
