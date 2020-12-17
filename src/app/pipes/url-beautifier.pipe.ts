import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlBeautifier'
})
export class UrlBeautifierPipe implements PipeTransform {
  transform(url: string): string {
    return url ? `url(${url})` : ''
  }
}
// if (url) {
//   return `url(${url})`
// } else {
//   return ''
// }
