import { deviceEnquire, DEVICE_TYPE } from '@/utils/device'

export const AppDeviceEnquire = {
  mounted() {
    deviceEnquire(deviceType => {
      switch (deviceType) {
        case DEVICE_TYPE.DESKTOP:
          this.$store.dispatch('changeDevice', 'desktop')
          break;
        case DEVICE_TYPE.TABLET:
          this.$store.dispatch('changeDevice', 'tablet')
          break;
        case DEVICE_TYPE.MOBILE:
          this.$store.dispatch('changeDevice', 'mobile')
          break;
      }
    })
  }
}
