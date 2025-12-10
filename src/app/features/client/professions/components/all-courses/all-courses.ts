import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ICourse {
  imgLink: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-all-courses',
  imports: [RouterLink],
  templateUrl: './all-courses.html',
  styleUrl: './all-courses.scss',
})
export class AllCourses {
  courses: ICourse[] = [
    {
      title: 'Loyha menejeri',
      imgLink: 'assets/imgs/profession/profession-1.jpg',
      description:
        'Jamoani samarali boshqarish va biznes strategiyalarini tuzishni o‘rganing. Haqiqiy liderlik k...',
    },
    {
      title: 'Veb dasturchi',
      imgLink: 'assets/imgs/profession/profession-2.jpg',
      description:
        'HTML, CSS va JavaScript yordamida zamonaviy veb-saytlar yarating. Kodlash olamiga ilk qadamingizni...',
    },
    {
      title: 'Arxitektor',
      imgLink: 'assets/imgs/profession/profession-3.jpg',
      description:
        'Bino va inshootlarni loyihalash hamda texnik chizmalarni o‘qishni o‘rganing. Qurilish rejalari usti...',
    },
    {
      title: 'Podkaster',
      imgLink: 'assets/imgs/profession/profession-4.jpg',
      description:
        'Ovoz yozish sirlari, tahrirlash va notiqlik san’atini egallang. O‘z professional podkast kanalingizni ishg...',
    },
    {
      title: 'Hamshira',
      imgLink: 'assets/imgs/profession/profession-5.jpg',
      description:
        'Bemorlarga g‘amxo‘rlik qilish va tibbiy muolajalar asoslarini o‘rganing. Tibbiyot sohasidagi profession...',
    },
    {
      title: 'DJ',
      imgLink: 'assets/imgs/profession/profession-6.jpg',
      description:
        'DJ kontrollerlarida ishlash va musiqani professional miks qilishni o‘rganing. Tadbirlarda haqiqiy atmosfer...',
    },
    {
      title: 'Tarbiyachi',
      imgLink: 'assets/imgs/profession/profession-7.jpg',
      description:
        'Bolalarni o‘qitishning zamonaviy metodikalari bilan tanishing. Bolalar psixologiyasi va rivojlanishni boshq...',
    },
    {
      title: 'C++ dasturchi',
      imgLink: 'assets/imgs/profession/profession-8.png',
      description:
        'Ob’ektga yo‘naltirilgan dasturlash va murakkab algoritmlarni o‘rganing. Yuqori tezlikdagi dasturiy ta...',
    },
    {
      title: 'Militisiya xodimi',
      imgLink: 'assets/imgs/profession/profession-9.png',
      description:
        'Jamoat xavfsizligi va qonunchilik asoslarini o‘rganing. Ichki ishlar organlarida ishlash uchun ker...',
    },
  ];
}
