
CREATE TABLE CAR (
id							int				UNIQUE,															
start_kilometers			int				NOT NULL,												
actual_kilometers			int				NOT NULL,												
radius_geofence				float(2)		DEFAULT (.5),											
id_car_image				int				NOT NULL,													
description					text,
insurance_period			date,
verification_validity		date,		
circulation_validity		date,
max_velocity				int 			DEFAULT (10),	
id_client					int,			
id_gps						int															
);

CREATE TABLE MODEL (
id							int				UNIQUE,															
name						varchar(60)		NOT NULL,												
year						int				NOT NULL,								
id_brand					int																					
);

CREATE TABLE BRAND (			
id							int				UNIQUE,															
name						varchar(40)		NOT NULL																			
);

CREATE TABLE GPS (
id							int 		 	UNIQUE,
alias						varchar(100) 	NOT NULL
);

CREATE TABLE DEFAULTUSER (
id							int 			UNIQUE,															
full_name					varchar(200),												
mail_address				varchar(100)	NOT NULL,									
telephone					int				NOT NULL,			
password					varchar(200),						
id_role						int,			
id_office					int	
);

CREATE TABLE CLIENT (
date_of_birth				date			NOT NULL,										
address						text			NOT NULL,
license_validity			date,										
id_seller					int,													
id_user						int				UNIQUE										
);

CREATE TABLE EMPLOYEE (
id_user						int				UNIQUE		
);

CREATE TABLE SELLER (
id_employee					int				UNIQUE
);

CREATE TABLE USERROLE (
id							int 			UNIQUE,											
type						varchar(40)		NOT NULL														
);

CREATE TABLE PERMIT (
id							int 			UNIQUE,															
name						varchar(50)		NOT NULL,											
description					text																	
);

CREATE TABLE OFFICE (
id							int 			UNIQUE,															
name						varchar(100)	NOT NULL,											
address						text			NOT NULL,	
state						varchar(100),																		
city						varchar(100)																						
);

CREATE TABLE SERVICE (
id							int				UNIQUE																			
);

CREATE TABLE TYPE (
id							int 			UNIQUE,															
name						varchar(80)		NOT NULL				
);

CREATE TABLE CAR_HAS_SERVICE (
id_car						int,											
id_service					int,											
date_of_service				date			NOT NULL																	
);

CREATE TABLE SERVICE_HAS_TYPE (
id_service					int,											
id_type						int	
);


CREATE TABLE ROLE_HAS_PERMIT (
id_role						int,											
id_permit					int,											
creation_date				timestamp 		NOT NULL DEFAULT CURRENT_TIMESTAMP,									
update_date					timestamp 		NOT NULL DEFAULT CURRENT_TIMESTAMP																
);

ALTER TABLE CAR 
ADD CONSTRAINT FOREIGN_KEY 
FOREIGN KEY (id_client) 
REFERENCES CLIENT(id_user);

ALTER TABLE CAR 
ADD CONSTRAINT FOREIGN_KEY_2
FOREIGN KEY (id_gps) 
REFERENCES GPS(id);

ALTER TABLE MODEL 
ADD CONSTRAINT FOREIGN_KEY 
FOREIGN KEY (id_brand) 
REFERENCES BRAND(id);

ALTER TABLE DEFAULTUSER 
ADD CONSTRAINT FOREIGN_KEY 
FOREIGN KEY (id_role) 
REFERENCES USERROLE(id);

ALTER TABLE DEFAULTUSER 
ADD CONSTRAINT FOREIGN_KEY_2 
FOREIGN KEY (id_office) 
REFERENCES USERROLE(id);

ALTER TABLE CLIENT
ADD CONSTRAINT FOREIGN_KEY 
FOREIGN KEY (id_seller) 
REFERENCES SELLER(id_employee);

ALTER TABLE CLIENT 
ADD CONSTRAINT FOREIGN_KEY_2 
FOREIGN KEY (id_user) 
REFERENCES DEFAULTUSER(id);

ALTER TABLE SELLER 
ADD CONSTRAINT FOREIGN_KEY 
FOREIGN KEY (id_employee) 
REFERENCES EMPLOYEE(id_user);

ALTER TABLE CAR_HAS_SERVICE 
ADD CONSTRAINT FOREIGN_KEY 
FOREIGN KEY (id_car) 
REFERENCES CAR(id);

ALTER TABLE CAR_HAS_SERVICE
ADD CONSTRAINT FOREIGN_KEY_2
FOREIGN KEY (id_service) 
REFERENCES SERVICE(id);

ALTER TABLE SERVICE_HAS_TYPE
ADD CONSTRAINT FOREIGN_KEY 
FOREIGN KEY (id_service) 
REFERENCES SERVICE(id);

ALTER TABLE SERVICE_HAS_TYPE
ADD CONSTRAINT FOREIGN_KEY_2
FOREIGN KEY (id_type) 
REFERENCES TYPE(id);

ALTER TABLE EMPLOYEE 
ADD CONSTRAINT FOREIGN_KEY 
FOREIGN KEY (id_user) 
REFERENCES DEFAULTUSER(id);

ALTER TABLE ROLE_HAS_PERMIT
ADD CONSTRAINT FOREIGN_KEY 
FOREIGN KEY (id_role) 
REFERENCES USERROLE(id);

ALTER TABLE ROLE_HAS_PERMIT 
ADD CONSTRAINT FOREIGN_KEY_2
FOREIGN KEY (id_permit) 
REFERENCES PERMIT(id);

ALTER TABLE CAR 
ADD CONSTRAINT PRIMARY_KEY1
PRIMARY KEY (id); 

ALTER TABLE MODEL 
ADD CONSTRAINT PRIMARY_KEY2
PRIMARY KEY (id, id_brand); 

ALTER TABLE BRAND 
ADD CONSTRAINT PRIMARY_KEY3
PRIMARY KEY (id); 

ALTER TABLE GPS 
ADD CONSTRAINT PRIMARY_KEY4
PRIMARY KEY (id); 

ALTER TABLE DEFAULTUSER 
ADD CONSTRAINT PRIMARY_KEY5
PRIMARY KEY (id); 

ALTER TABLE CLIENT 
ADD CONSTRAINT PRIMARY_KEY6
PRIMARY KEY (id_user); 

ALTER TABLE SELLER 
ADD CONSTRAINT PRIMARY_KEY7
PRIMARY KEY (id_employee); 

ALTER TABLE USERROLE 
ADD CONSTRAINT PRIMARY_KEY8
PRIMARY KEY (id); 

ALTER TABLE PERMIT 
ADD CONSTRAINT PRIMARY_KEY9
PRIMARY KEY (id); 

ALTER TABLE OFFICE 
ADD CONSTRAINT PRIMARY_KEY10
PRIMARY KEY (id); 

ALTER TABLE SERVICE 
ADD CONSTRAINT PRIMARY_KEY11
PRIMARY KEY (id); 

ALTER TABLE TYPE 
ADD CONSTRAINT PRIMARY_KEY12
PRIMARY KEY (id); 

ALTER TABLE CAR_HAS_SERVICE 
ADD CONSTRAINT PRIMARY_KEY13
PRIMARY KEY (id_car, id_service); 

ALTER TABLE SERVICE_HAS_TYPE 
ADD CONSTRAINT PRIMARY_KEY14
PRIMARY KEY (id_service, id_type);

ALTER TABLE EMPLOYEE 
ADD CONSTRAINT PRIMARY_KEY15
PRIMARY KEY (id_user); 

ALTER TABLE ROLE_HAS_PERMIT 
ADD CONSTRAINT PRIMARY_KEY16
PRIMARY KEY (id_role, id_permit); 


