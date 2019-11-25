new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    
    data (){
    
    return {

        user:false,
            offset:true,
            closeOnContentClick:false,
            calendar:false,
            choose:false,


      today: "today",
      focus: "today",
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },

      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,

            events: [
                {
                  name: 'Meeting with GF',
                  start: '2019-11-07',
                  end: "2019-11-09",
                  color: 'green',
                  details: 'Going to the school!',
                },

                {
                    name: 'Meeting with MF',
                    start: '2019-11-09',
                    end: "2019-11-12",
                    color: 'blue',
                    details: 'Going to the school!',
                  },
                
              ],
            }
        },
            


        computed: {
            title() {
              
              const { start, end } = this
              if (!start || !end) {
                return ''
              }
              const startMonth = this.monthFormatter(start)
              const endMonth = this.monthFormatter(end)
              const suffixMonth = startMonth === endMonth ? '' : endMonth
              const startYear = start.year
              const endYear = end.year
              const suffixYear = startYear === endYear ? '' : endYear
              const startDay = start.day + this.nth(start.day)
              const endDay = end.day + this.nth(end.day)
              
              switch (this.type) {
                case 'month':
                  return `${startMonth} ${startYear}`
                case 'week':
                case '4day':
                  return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
                case 'day':
                  return `${startMonth} ${startDay} ${startYear}`
              }
              return ''
            },
            
            monthFormatter () {
              return this.$refs.calendar.getFormatter({
                timeZone: 'UTC', month: 'long',
              })
            },

          },
                       


            methods: {
              pushtest(e){
                
                rand=Math.floor(Math.random() * 1000);
                this.events.push({
                  name: 'New Event',
                  start: '2019-11-27',
                  end: "2019-11-29",
                  color: '#'+rand,
                  details: 'No',
                })
              },
                viewDay ({ date }) {
                  this.focus = date
                  this.type = 'day'
                },
                getEventColor (event) {
                  return event.color
                },
                setToday () {
                  this.focus = this.today
                },
                prev () {
                  this.$refs.calendar.prev()
                },
                next () {
                  this.$refs.calendar.next()
                },
                showEvent ({ nativeEvent, event }) {
                  const open = () => {
                    this.selectedEvent = event
                    this.selectedElement = nativeEvent.target
                    setTimeout(() => this.selectedOpen = true, 10)
                  }
                  if (this.selectedOpen) {
                    this.selectedOpen = false
                    setTimeout(open, 10)
                  } else {
                    open()
                  }
                  nativeEvent.stopPropagation()
                },

                updateRange ({ start, end }) {
                  // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
                  this.start = start
                  this.end = end
                },

                nth (d) {
                  return d > 3 && d < 21
                    ? 'th'
                    : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
                },
            },

            
            
        
    
})