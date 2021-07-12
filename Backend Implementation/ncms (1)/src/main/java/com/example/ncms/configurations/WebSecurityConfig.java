package com.example.ncms.configurations;

import com.example.ncms.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.OncePerRequestFilter;

/*To use WebSecurityConfigurerAdapter : add the dependency in the pom.xml
<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-web</artifactId>
</dependency>*/

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    @Autowired
    private UserDetailsService jwtUserDetailsService;

    @Autowired
    private OncePerRequestFilter jwtRequestFilter;

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        // configure AuthenticationManager so that it knows from where to load
        // user for matching credentials
        // Use BCryptPasswordEncoder
        auth.userDetailsService(jwtUserDetailsService).passwordEncoder(passwordEncoder());
    }

//    @Bean
//    public UserDetailsService userDetailsService(){
//        return new UserDetailsServiceImpl();
//    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

//    @Bean
//    public DaoAuthenticationProvider authenticationProvider () {
//        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
//        authenticationProvider.setPasswordEncoder(passwordEncoder());
//        authenticationProvider.setUserDetailsService(userDetailsService());
//        return authenticationProvider;
//    }
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.authenticationProvider(authenticationProvider());
//    }

//    @Override
//    public void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(jwtUserDetailsService).passwordEncoder(passwordEncoder());
//    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        // We don't need CSRF for this example
        httpSecurity.cors().and().csrf().disable()
                // dont authenticate this particular request
                .authorizeRequests().antMatchers(
                        "/authenticate",
                "/api/patient/find_all",
                "/api/patient/get_stat_gender",
                "/api/queue/get_count",
                "/api/patient/get_stat_districts").permitAll()
                .antMatchers("/api/moh/add/").hasAnyAuthority("ADMIN")
                .antMatchers("/api/doctor/add/").hasAnyAuthority("ADMIN", "MOH", "DIRECTOR")
                .antMatchers("/api/patient/add/").hasAnyAuthority("ADMIN", "DIRECTOR", "MOH", "DOCTOR")
                .antMatchers("/api/doctors/add/").hasAnyAuthority("ADMIN", "DIRECTOR", "MOH")
                .antMatchers("/api/doctors/delete/").hasAnyAuthority("ADMIN", "MOH")
                .antMatchers("/api/patient/delete/**").hasAnyAuthority("ADMIN", "MOH", "DIRECTOR")
                // all other requests need to be authenticated
                .anyRequest().authenticated().and().
                // make sure we use stateless session; session won't be used to
                // store user's state.
                        exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        // Add a filter to validate the tokens with every request
        httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }

//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.cors().and().csrf().disable().authorizeRequests()
//                .antMatchers("/").hasAnyAuthority("ADMIN", "MOH", "DIRECTOR", "DOCTOR", "PATIENT", "STAFF")
//                .antMatchers("/api/moh/**").hasAuthority("ADMIN")
//                .antMatchers("/api/doctor/add/").hasAnyAuthority("ADMIN", "MOH", "DIRECTOR")
//                .antMatchers("/api/patient/add/").hasAnyAuthority("ADMIN", "DIRECTOR", "MOH", "DOCTOR")
//                .antMatchers("/api/doctors/add/").hasAnyAuthority("ADMIN", "DIRECTOR", "MOH")
//                .antMatchers("/api/doctors/delete/").hasAnyAuthority("ADMIN", "MOH")
//                .antMatchers("/api/patient/delete/**").hasAnyAuthority("ADMIN", "MOH", "DIRECTOR")
//                .anyRequest().authenticated()
//                .and()
//                .formLogin().permitAll()
//                .loginProcessingUrl("/login")
//                .and()
//                .logout().permitAll()
//                .and()
//                .exceptionHandling().accessDeniedPage("/403")
//                ;
//    }

//    @Override
//    public void configure(HttpSecurity http) throws Exception {
//        http.cors().and().csrf().disable()
//                .authorizeRequests().antMatchers("api/admin/**",   "api/doctor/**" , "api/moh/**").hasRole("ADMIN")
//                .antMatchers("api/patient/**","/hospital/**").hasRole("DOCTOR")
//                .antMatchers("api/patient/**").hasRole("PATIENT")
//                .antMatchers("/login","api/patient/find_all/","api/hospital/find_all").permitAll().anyRequest().authenticated()
//                .and().exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).
//                and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).
//                and().addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
//    }
}
