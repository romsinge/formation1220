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

// PIPE No 1 : trier les produits de la liste par prix
// PIPE No 2 : ajouter une searchbar au dessus de la liste et afficher
// les produits qui correspondent a la recherche