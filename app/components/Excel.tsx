import { useEffect, useState } from 'react';

export default function SheetsData() {
    const [data, setData] = useState<string[][]>([]);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        // Detectar cambios en el tamaño de la ventana para ajustar el diseño
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Puedes ajustar el breakpoint según tu diseño
        };

        // Agregar event listener al redimensionar
        window.addEventListener('resize', handleResize);

        // Inicializar el estado en el primer renderizado
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        fetch('https://docs.google.com/spreadsheets/d/1nx_488aeoJOVrEJiWG7PUbpOLZfW2wuEkhsCPXpXCyo/gviz/tq?tqx=out:json')
          .then((response) => response.text())
          .then((text) => {
            const json = JSON.parse(text.substr(47).slice(0, -2));
            const rows = json.table.rows
              .slice(1) // Saltar la primera fila que contiene el header
              .map((row: { c: any[]; }) =>
                row.c.map(cell => (cell && cell.v) || '')
              );

            setData(rows);
          })
          .catch((error) => console.error('Error fetching data:', error));
    }, []);

    // Función para transponer los datos
    const transpose = (matrix: string[][]) => {
        if (matrix.length === 0) return matrix;
        return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    };

    // Transponer los datos si es móvil
    const displayData = isMobile ? transpose(data) : data;

    return (
        <div className='w-full pb-10 items-center'>
            <h1 className='text-center title text-[3rem] font-serif text-gray-200'>Horarios</h1>
            <hr
                style={{
                  width: "40%",
                  borderTop: "2px solid #ccc",
                  marginTop: "0.5rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: "1rem",
                }}
            />
            <div className="overflow-x-auto">  {/* Contenedor con scroll lateral */}
                <table className='table-auto w-full md:w-[60%] border-collapse mx-auto px-1'>
                    <tbody>
                        {displayData.map((row, rowIndex) => (
                            <tr key={rowIndex} className='border'>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className='border px-4 py-2 text-center py-3 text-2xl text-gray-200'>
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
