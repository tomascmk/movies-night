import { useEffect, useState } from 'react'

interface AsyncApiCallNotStarted {
  started: false
  loading: false
  failed: false
  completed: false
}
interface AsyncApiCallInProgress {
  started: true
  loading: true
  failed: false
  completed: false
}

interface AsyncApiCallSuccess<TRes> {
  started: true
  loading: false
  failed: false
  completed: true
  result: TRes
}

interface AsyncApiCallError {
  started: true
  loading: false
  completed: false
  failed: true
  error: unknown
}

export type AsyncApiCallStatus<TRes> =
  | AsyncApiCallNotStarted
  | AsyncApiCallInProgress
  | AsyncApiCallSuccess<TRes>
  | AsyncApiCallError

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
export function useAsyncCall<TRes>(
  asyncMethod: () => Promise<TRes>,
  dependencies: any[]
): AsyncApiCallStatus<TRes> {
  const [apiCallStatus, setApiCallStatus] = useState<AsyncApiCallStatus<TRes>>({
    started: false,
    loading: false,
    failed: false,
    completed: false
  })

  useEffect(() => {
    let canceled = false

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    ;(async (): Promise<void> => {
      try {
        setApiCallStatus({
          started: true,
          loading: true,
          failed: false,
          completed: false
        })
        const result = await asyncMethod()
        if (!canceled) {
          setApiCallStatus({
            started: true,
            loading: false,
            failed: false,
            completed: true,
            result
          })
        }
      } catch (error: any) {
        if (!canceled) {
          setApiCallStatus({
            started: true,
            loading: false,
            failed: true,
            completed: false,
            error
          })
        }
      }
    })()

    return (): void => {
      canceled = true
    }
  }, dependencies)

  return apiCallStatus
}

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
export async function runAsyncCall<TRes>(
  asyncMethod: () => Promise<TRes>,
  setSubmitStatus: React.Dispatch<
    React.SetStateAction<AsyncApiCallStatus<TRes> | undefined>
  >
): Promise<void> {
  try {
    setSubmitStatus({
      started: true,
      loading: true,
      failed: false,
      completed: false
    })
    const result = await asyncMethod()
    setSubmitStatus({
      started: true,
      loading: false,
      failed: false,
      completed: true,
      result
    })
  } catch (error: any) {
    setSubmitStatus({
      started: true,
      loading: false,
      failed: true,
      completed: false,
      error
    })
  }
}
