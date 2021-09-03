module.exports = {
  mode: 'jit',
  purge: ['./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        space:
          "url('https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2021/09/511895main_Kepler-11_IntroShot_full.jpg')",
        privacy:
          "url('https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2021/09/Data-privacy-identity-hed.jpg')",
        kid: "url('https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2021/09/Kid-gaming-hed.jpg')",
        snag: "url('https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2021/09/Snag_e88a867.png')",
        conference:
          "url('https://img-cdn.tnwcdn.com/image?fit=600%2C300&url=https%3A%2F%2Fs3.amazonaws.com%2Fevents.tnw%2Fhardfork-2018%2Fuploads%2Fcompanies%2Fhome-header_advert-tnw2021-03.jpg&signature=43c10247566e28a49e35b5c5284ae755')",
        explore1:
          'url(https://img-cdn.tnwcdn.com/image?fit=260%2C235&url=https%3A%2F%2Fnext.tnwcdn.com%2Fassets%2Fnext%2Fimg%2Fbackdrop-s-plugged.jpg&signature=4423a77a45ff6281a089424a8dd0bc24)',
        explore2:
          'url(https://img-cdn.tnwcdn.com/image?fit=260%2C235&url=https%3A%2F%2Fnext.tnwcdn.com%2Fassets%2Fnext%2Fimg%2Fbackdrop-s-neural.jpg&signature=7b20700b0f58af3860449664ae1a5e68)',
        explore3:
          'url(https://img-cdn.tnwcdn.com/image?fit=260%2C235&url=https%3A%2F%2Fnext.tnwcdn.com%2Fassets%2Fnext%2Fimg%2Fbackdrop-s-shift.jpg&signature=1d3ef28f5220f870b7e289810caa80a3)',
        explore4:
          'url(https://img-cdn.tnwcdn.com/image?fit=260%2C235&url=https%3A%2F%2Fnext.tnwcdn.com%2Fassets%2Fnext%2Fimg%2Fbackdrop-s-growth-quarters.jpg&signature=72ccfd9e92f942be8ace3526d0dc3aab)',
        explore5:
          'url(https://img-cdn.tnwcdn.com/image?fit=260%2C235&url=https%3A%2F%2Fnext.tnwcdn.com%2Fassets%2Fnext%2Fimg%2Fbackdrop-s-hardfork.jpg&signature=77d9941cfc302cb2e25c39ab3043fa7b)',
        newsletter: 'url(https://next.tnwcdn.com/assets/next/img/spacesbg.png)',
      }),
      fontFamily: {
        trump: ['Trump Soft Pro', 'Arial Narrow', 'sans-serif'],
        TNW: ['TNW Avalon', 'sans-serif'],
      },
      colors: {
        tnwsky: '#0cc',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        headeryellow: '#fd3',
        tnwsky: '#0cc',
        tnwskyhover: '#0dd'
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
