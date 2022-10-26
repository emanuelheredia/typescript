(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe = false;
  
    // Tuplas
    const parejaHeroes:[string,string] = [batman,superman];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum fuerzas  { 
      fAcuaman = 0,
      fBatman = 1,
      fFlash = 5,
      fSuperman=100
      }
    const fuerzaFlash:fuerzas = fuerzas.fFlash;
    const fuerzaSuperman:fuerzas = fuerzas.fSuperman;
    const fuerzaBatman:fuerzas = fuerzas.fBatman;
  const fuerzaAcuaman:fuerzas = fuerzas.fAcuaman;
  
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length
    console.log( largoDelPoder );
  
  
  })()
  
  