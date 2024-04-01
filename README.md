# **Opis**
Rent-a-Bike je samostalni študentski projekat, ki predstavlja kompletno spletno stran za iznajmljivanje bicikla, vključno z adminskim panelom

# **Uporaba**
* Najprej morate namestiti XAMPP in zagnati Apache in MySQL strežnik.
* Nato kopirajte celotno vsebino tega projekta v mapo htdocs v vaši XAMPP namestitvi. To je običajno C:\xampp\htdocs na Windowsu ali /Applications/XAMPP/htdocs na MacOS.
* Pojdite na http://localhost/phpmyadmin/ in uvozite datoteko bikes.sql, da ustvarite potrebno podatkovno bazo.
* Odprite brskalnik in vnesite URL http://localhost/RentABike/ za dostop do aplikacije.
# **Funkcionalnosti**
* Registracija in Prijava: Uporabniki lahko ustvarijo svoj račun ali se prijavijo v obstoječega. (Obstajajo **admin@gmail.com geslo: admin** za admina, ter **uporabnik@gmail.com geslo: uporabnik** za uporabnika)
![1](https://github.com/AndrejTesten/OP_Library/assets/77637373/76e88e11-82c8-4833-aef1-e927e481bad6)
![2](https://github.com/AndrejTesten/OP_Library/assets/77637373/55abddef-8540-48b5-9051-162a062672ec)
![3](https://github.com/AndrejTesten/OP_Library/assets/77637373/20217ad9-a62c-4187-8228-0f6a6ccc41e6)

* Prikaz Koles: Stranke lahko preverijo razpoložljiva kolesa in njihove podrobnosti. (V ponudbi so prikazana kolesa) 
* Rezervacije: Možnost rezervacije kolesa za določeno obdobje klikom na gumb "izposoji" pri določenem kolesu. Odpre se novo okno v katerem stranka lahko izbere datume (če niso že zasedeni) ter vnese svoje ime.
![4](https://github.com/AndrejTesten/OP_Library/assets/77637373/473ef0f5-7582-49b8-9424-7f2e22357342)
![5](https://github.com/AndrejTesten/OP_Library/assets/77637373/0d34a8cb-b873-436f-9424-a86a416ca4a7)

* Upravljanje Rezervacij: Stranke in administratorji lahko pregledujejo in urejajo obstoječe rezervacije. (Ko se stranka prijavi v navigacijskem meniju se odpre nova možnost "moje rezervacije", admin rezervacije lahko uredi na strani "zahtevi")

**UPORABNIK**
![6](https://github.com/AndrejTesten/OP_Library/assets/77637373/9950ec35-fc92-4e22-ab3d-9ca1e916be2c)

**ADMIN**
![7](https://github.com/AndrejTesten/OP_Library/assets/77637373/81b84446-4034-49bf-910d-a959970d9b06)

* Stranka lahko kontaktira podjetje, ko se prijavi na spletno stran, v dnu strani se odpre nov del pod nazivom kontakt. Admin lahko sporočila preveri klikom na "sporočila" v meniju
![9](https://github.com/AndrejTesten/OP_Library/assets/77637373/f9dfc581-fdb8-440e-b78f-ab09b0b39ed7)
![10](https://github.com/AndrejTesten/OP_Library/assets/77637373/3ab0a07a-0184-4555-b4c1-f93d740ce9cf)

# **Krediti**
* Bootstrap - Uporabljeno za oblikovanje in strukturo spletnega mesta.
* Font Awesome - Uporabljene ikone za boljšo uporabniško izkušnjo.
