import { fileUpload } from "../../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dwptcnamp',
    api_key: '355959961178435',
    api_secret: 'PGRrxrx_LhLgaAYwKtPVmYWo4os',
    secure:true
});

describe ( 'pruebas en fileUpload' , () => {
        test ( 'debe de cargar un archivo y retornar el URL' , async () => {
            const resp = await fetch ( 'https://dearsam.com/img/600/744/resize/p/a/panoramic-landscape-70x50.jpg' );
            const blob = await resp.blob();
    
            const file = new File ([ blob ], 'foto.jpg' );
            const url = await fileUpload ( file );
    
            expect ( typeof url ).toBe( 'string' );

            // Borrar imagen por ID
            const segments = url.split( '/' );
            const imageId = segments[ segments.length - 1 ].replace( '.jpg' , '' );
            await cloudinary.api.delete_resources( [ 'journal/' + imageId ], { resource_type: 'image'});



    
        });
        test ( 'debe de retornar un error' , async () => {
            const file = new File ([], 'foto.jpg' );
            const url = await fileUpload ( file );
    
            expect ( url ).toBe( null );
        });
    });