import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.page.html',
  styleUrls: ['./grocery.page.scss'],
})
export class GroceryPage implements OnInit {

  title="Grocery List"

  Items=[
    {
      name: "Milk",
      quantity:"2"
    },
    {
      name:"Break",
      quantity:"2"
    },
    {
      name:"Egg",
      quantity:"4"
    }
  ]

  constructor(public toastController: ToastController,
              public alertController: AlertController) { }

  ngOnInit() {
  }

  async removeItem(item, index ) {
    this.Items.splice(index,1);
    console.log("Removing Items-",item,index);
    const toast = await this.toastController.create({
      message: 'Item - '+ item.name +' Quantity '+item.quantity+' removed',
      duration: 2000
    });
    toast.present();
    
  }

  addItem(){
    console.log("Adding Item");
    this.showAddItemPrompt();
  }
  async showAddItemPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Item!',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          type: 'number',
          value: '1',
          placeholder: 'Quantity'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: item => {
            console.log('Confirm Ok');
            console.log(item.name);
            this.Items.push(item);
          }
        }
      ]
    });

    await alert.present();
  }
}
