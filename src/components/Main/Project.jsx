import React from 'react';
import Projects from './Projects';
import "./Projects.css";

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

import meetingu_image from "../../img/meetingu-cover3.png"
import personal_websitev2 from "../../img/v1.png"
import ut_image from "../../img/ut2.jpg"
import cnn_image from "../../img/cnn.jpg"
import gan_image from "../../img/gan3.jpg"
import loss_image from "../../img/loss2.jpg"
import raft_image from "../../img/raft2.png"
import fakenews_image from "../../img/fakenews.png"
import image_cog from "../../img/image_cog.png"
import game_image from "../../img/game_img.png"


function Project () {
    const myProjects = [
        {
          image: meetingu_image,
          title: 'MeetingU LLC',
          tools: ['Django', 'Python', 'Javascript', 'HTML', 'CSS'],
          description: 'I have started a startup company with a colleague and currently serving as the CEO, main programmer, and business manager. I developed the frontend / backend / database side of the website using Django, and currently planning marketing / sales strategies. In this project, I have made a payment / payout, verification, reservation system, etc using Python and Javascript.',
          link:"https://github.com/yehjuneheo/MeetingU_LLC",
          delay: 200,
        },
        {
            image: personal_websitev2,
            title: 'Personal Website V1',
            tools: ['React', 'JavaScript', 'HTML', 'CSS'],
            description: 'This is another version of a 3D interactive personal website using React.',
            link:"https://github.com/yehjuneheo/Personal_Website",
            delay: 300,
          },
          {
            image: ut_image,
            title: 'UT Event Reminder',
            tools: ['Django', 'Python', 'Javascript', 'HTML', 'CSS'],
            description: 'I made a website that allows University of Texas at Austin students to get emails of events happening in different departments.',
            link:"https://github.com/yehjuneheo/Event_Reminder",
            delay: 400,
          },
          {
            image: raft_image,
            title: 'RAFT Optical Flow Model Implementation on Anti-Spoofing',
            tools: ['Python', 'OpenCV'],
            description: 'TBD',
            link:"TBD",
            delay: 200,
          },
          {
            image: game_image,
            title: 'Zomebie Shower Game Development',
            tools: ['Unity', 'C#'],
            description: 'TBD',
            link:"TBD",
            delay: 300,
          },
          {
            image: image_cog,
            title: 'FE-Global-DIC: Finite-element-based Global Digital Image Correlation',
            tools: ['Doxygen', 'C'],
            description: 'TBD',
            link:"TBD",
            delay: 400,
          },
          {
            image: fakenews_image,
            title: 'Fake News Detection',
            tools: ['Python'],
            description: 'TBD',
            link:"TBD",
            delay: 200,
          },
          {
            image: cnn_image,
            title: 'Comparative Analysis of CNN Approaches for Fingerprint Anti-Spoofing',
            tools: ['Python','TensorFlow', 'Scikit-Learn'],
            description: 'This paper contributes to finding a reliable and practical anti-spoofing method using convolutional neural networks (CNN). Among various models of CNN, this paper compares six models: LeNet, AlexNet, GoogLeNet, VggNet,  ResNet, and DenseNet, in order to find the most proper models for fingerprint anti-spoofing. The model with the highest average accuracy is reinforced by the change in various parameters. In addition to the highest generalization performance, this paper also contains the models with high accuracy associated with parameters and mean average error rates to find the model that consumes the least memory and computation time for training and testing.',
            link:"TBD",
            delay: 300,
          },
          {
            image: loss_image,
            title: 'Loss Function Optimization for CNN based Fingerprint Anti-Spoofing',
            tools: ['Python','TensorFlow', 'Scikit-Learn'],
            description: 'This study explores a reliable anti-spoofing method using various types of CNNs like AlexNet, VGGNet, and ResNet, along with different loss functions and optimizers. It emphasizes the importance of selecting the correct loss function, as different ones can lead to distinct errors on identical evaluations. The research uses a subset of the Livdet 2017 database to assess generalization power across models, leading to a performance gain of over 3% using AlexNet with the suitable loss function and optimizer compared to other default CNN models.',
            link:"TBD",
            delay: 400,
          },
          {
            image: gan_image,
            title: 'GAN based Fingerprint Anti-Spoofing Limitations',
            tools: ['Python','TensorFlow', 'Scikit-Learn'],
            description: 'This study evaluates the performance of GAN-based methods, specifically DCGAN, StarGAN, and StyleGAN, in fingerprint synthesis for training purposes. CNN models were trained first with a dataset without fake images, and then with fake and real images combined. Results show that while the synthesized fingerprints\' quality is reasonable, Anti-Spoofing performance requires significant improvement, especially when the number of samples is small. The paper includes an analysis of this performance decline and proposes ways to improve generalization with limited samples.',
            link:"TBD",
            delay: 200,
          },
        // add more projects as necessary...
      ];
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <Projects projects={myProjects} />
        </section>

    )
};
export default React.memo(Project);