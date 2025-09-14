import { Application } from 'express';
import axios from 'axios';

export default function (app: Application): void {
  app.get('/delete-task', async (req, res) => {
    try {
      // An second example, rendering another example case from the backend
      const response = await axios.get('http://localhost:4000/delete-task');
      console.log(response.data);
      res.render('delete-task', { "example": response.data });
    } catch (error) {
      console.error('Error making request:', error);
      res.render('delete-task', {});
    }
  });
}
