import { Application } from 'express';
import axios from 'axios';

export default function (app: Application): void {
  app.get('/update-task-status', async (req, res) => {
    try {
      // An second example, rendering another example case from the backend
      const response = await axios.get('http://localhost:4000/update-task-status');
      console.log(response.data);
      res.render('update-task-status', { "example": response.data });
    } catch (error) {
      console.error('Error making request:', error);
      res.render('update-task-status', {});
    }
  });
}
