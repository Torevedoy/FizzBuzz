for ( let i = 0; i < 100; i++ ) {
    let output_string = '';
    if ( i % 3 === 0 ) { output_string += 'Fizz'; };
    if ( i % 5 === 0 ) { output_string += 'Buzz'; };
    output_string ? console.log(output_string): console.log(i);
}
