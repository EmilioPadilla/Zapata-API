module.exports ={
    attributes: {
        id: {
            type: 'number',
            required: true,
            autoIncrement: true
        },			
			
        full_name:{
            type: 'string', 
            required: true,


        },		

        mail:{
            type: 'string', 
            required: true,
            
        },		

        phone:{
            type: 'string', 
            required: true,

        },			

        password:{
            type: 'string', 
            required: true,

        },			

        id_office:{
            type: 'number',
            required: false,

        },	

        id_role:{
            type: 'number',
            required: false,

        }	
			
    }
}