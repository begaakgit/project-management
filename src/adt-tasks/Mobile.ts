class Mobile{
	p_id: string;
	p_name:string; 
	p_color: string;
	p_condition: string;
	p_price: number;

	constructor(p_id, p_name, p_color, p_condition, p_price){
		this.p_id = p_id;
        this.p_name = p_name; 
    	this.p_color = p_color;
		this.p_condition =  p_condition;
		this.p_price = p_price;		
	}
}

export default Mobile;