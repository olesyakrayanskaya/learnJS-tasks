if (-1 || 0) alert( 'first' ); // выполнится, результат -1 || 0 = -1
if (-1 && 0) alert( 'second' ); //не выполнится, результат -1 && 0 = 0
if (null || -1 && 1) alert( 'third' ); // выполнится, результат null || -1 && 1 = 1